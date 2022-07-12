import React from "react";
import { Paper } from "@mui/material";
import { ViewState, ViewSwitcher } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  MonthView,
  WeekView,
  Appointments,
  AllDayPanel,
  CurrentTimeIndicator,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
  DateNavigator,
  DragDropProvider,
  EditingState,
  EditRecurrenceMenu,
  GroupingPanel,
  GroupingState,
  IntegratedEditing,
  IntegratedGrouping,
  Resources,
  TodayButton,
  Toolbar,
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments } from "../Data";

const CalenderScreen = () => {
  const currentDate = new Date();

  console.log("currentDate", currentDate);

  return (
    <Paper>
      <Scheduler data={appointments}>
        <ViewState currentDate={currentDate} />
        {/* <MonthView startDayHour={12} endDayHour={24} /> */}
        <WeekView startDayHour={12} endDayHour={24} />
        {/* <DayView startDayHour={12} endDayHour={24} /> */}
        <Appointments />
        <AllDayPanel />
        <CurrentTimeIndicator />
        {/* <AppointmentForm visible={true} /> */}
        {/* <AppointmentTooltip visible={true} /> */}
        {/* <ConfirmationDialog /> */}
        {/* <DateNavigator /> */}
        {/* <DragDropProvider /> */}
        {/* <EditingState /> */}
        {/* <EditRecurrenceMenu /> */}
        {/* <GroupingPanel /> */}
        {/* <GroupingState /> */}
        {/* <IntegratedEditing /> */}
        {/* <IntegratedGrouping /> */}
        <Resources />
        {/* <TodayButton /> */}
        <Toolbar />
        {/* <ViewSwitcher /> */}
      </Scheduler>
    </Paper>
  );
};

export default CalenderScreen;
