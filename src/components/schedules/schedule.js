import React from 'react';
import { DatePicker, Icon, TimePicker, Input, Button } from 'antd';
import moment from 'moment';                          
import './schedule.css';
class Schedule extends React.Component {
    constructor() {
        super();
        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false,
            isSchedule: false,
        };
    }

    disabledStartDate = startValue => {
        const { endValue } = this.state;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = endValue => {
        const { startValue } = this.state;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    };

    onStartChange = value => {
        this.onChange('startValue', value);
    };

    onEndChange = value => {
        this.onChange('endValue', value);
    };

    handleStartOpenChange = open => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    };

    handleEndOpenChange = open => {
        this.setState({ endOpen: open });
    };
    toggleSchedule = () => {
        this.setState({ isSchedule: !this.state.isSchedule });
    }

    render() {
        const { startValue, endValue, endOpen, isSchedule } = this.state;
        return (
            <div className='schedule-container'>
                <div className="schedule-drop">
                    {isSchedule ? <Icon type="caret-right" onClick={this.toggleSchedule} /> : <Icon type={"caret-down"} onClick={this.toggleSchedule} />}
                    <h3>Schedules</h3>
                </div>
                {!isSchedule &&
                    <div className="scheduleEle">
                        <div className='dates_slots'>
                            <div>
                                <span className="label-slot">Start Date:</span>
                            <DatePicker
                                disabledDate={this.disabledStartDate}
                                // format="YYYY-MM-DD HH:mm:ss"
                                format="YYYY-MM-DD"
                                value={startValue}
                                showTime
                                placeholder="Start"
                                onChange={this.onStartChange}
                                onOpenChange={this.handleStartOpenChange}
                            />
                            </div>
                            <div>
                            <span className="label-slot">End Date:</span>
                            <DatePicker
                                disabledDate={this.disabledEndDate}
                                showTime
                                // format="YYYY-MM-DD HH:mm:ss"
                                format="YYYY-MM-DD"
                                value={endValue}
                                placeholder="End"
                                onChange={this.onEndChange}
                                open={endOpen}
                                onOpenChange={this.handleEndOpenChange}
                            />
                            </div>
                        </div>
                        <div className="times_slots">
                            <div>
                                <span className="label-slot">Start Time:</span>
                                <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
                                ET
                            </div>
                            <div>
                                <span className="label-slot">End Time:</span>
                                <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
                                ET
                            </div>
                        </div>
                        <div className="condition-type">
                            <div>
                                <span>Condition Type</span>
                                <Input size="large" placeholder="large size" />
                            </div>
                            <div>
                                <span>Condition value</span>
                                <Input size="large" placeholder="large size" />
                            </div>
                        </div>
                        <div className="schedule-btns">
                            <Button>Cancel</Button>
                            <Button>Add</Button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
export default Schedule