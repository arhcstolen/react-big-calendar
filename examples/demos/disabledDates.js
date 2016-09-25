import React from 'react';
import BigCalendar from 'react-big-calendar';

let DisabledDates = React.createClass({
  render () {
    return (
      <div {...this.props}>
        <h3 className="callout">
          Some dates should not be selectable
        </h3>
        <BigCalendar 
          selectable
          events={[]}
          defaultView='week'
          disabledDates={[
            '2016-09-22',
            '2016-09-23'
          ]}
          disabledDays={[0, 6]}
          defaultDate={ new Date() }
          onSelecting={ ({start, end}) => 1 }
          onSelectEvent={ event => alert(event.title) }
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
          )}
        />
      </div>
    )
  }
});

export default DisabledDates;
