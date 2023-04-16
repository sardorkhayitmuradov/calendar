import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/uz';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
    fetchEventsRequest,
    createEventRequest,
    deleteEventRequest,
} from '../../redux/actions/eventActions';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal';
import './index.css'

const localizer = momentLocalizer(moment);

const FullScreenCalendar = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.events);
    const [eventInfo, setEventInfo] = useState(null);

    const handleSelect = ({ start, end }) => {
        const title = prompt('Enter event title:');
        const description = prompt('Enter event description:');
        const startDate = start.toLocaleDateString('en-US');
        const endDate = end.toLocaleDateString('en-US');

        if (title && start && end) {
            const newEvent = { title, description, startDate, endDate };
            dispatch(createEventRequest(newEvent));
        }
    };

    console.log(eventInfo)

    const handleEventClick = (event) => {
        setEventInfo({
            title: event?.title,
            description: event?.description,
            startDate: event?.startDate,
            endDate: event?.endDate
        });
    };

    const handleEventDelete = (eventToDelete) => {
        dispatch(deleteEventRequest(eventToDelete.id));
    };

    const eventStyleGetter = (event) => {

        const tooltip = `${event.title}\n${event.description}`;
        const style = {
            backgroundColor: 'red',
            color: 'white',
        };
        return {
            style: style,
            tooltip: tooltip,
        };
    };

    // Fetch events when the component mounts
    useEffect(() => {
        dispatch(fetchEventsRequest());
    }, [dispatch]);

    return (
        <div style={{ height: '90vh' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="startDate"
                endAccessor="endDate"
                tooltipAccessor={'tooltip'}
                eventPropGetter={eventStyleGetter}
                style={{ height: '100%', width: '100%' }}
                selectable
                onSelectSlot={handleSelect}
                onSelectEvent={handleEventClick}
                onDoubleClickEvent={handleEventDelete}
            />
            {eventInfo && (
                <Modal onClose={() => setEventInfo(null)}>
                    <div className='modal-wrapper'>
                        <p>Title: {eventInfo?.title ?? ''}</p>
                        <p>Description: {eventInfo?.description ?? ''}</p>
                        <p>Start Date: {eventInfo?.startDate ?? ''}</p>
                        <p>End Date: {eventInfo?.endDate ?? ''}</p>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default FullScreenCalendar;