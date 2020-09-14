import * as React from "react";
import Page from "modules/common/components/Page";
import {
 Formik, Field, ErrorMessage,
} from 'formik';
import Input from "modules/form/components/Input";
import MoodSelector from "modules/form/components/MoodSelector";
import DayPicker from "modules/form/components/DatePicker";
import TimePicker from "modules/form/components/TimePicker";
import Form from "modules/form/components/Form";
import './style.scss';

export default function Tracker() {
    return (
      <Page title="Tracker">
        <div>
          <Form title="Fill the fields and send current mood!">
            <MoodSelector className="tracker__mood-selector" />
            <div className="tracker__fields-container">
              <DayPicker className="tracker__day-picker" />
              <TimePicker className="tracker__time-picker" />
              <Input label="Comment" className="tracker__input" />
            </div>
          </Form>
        </div>
      </Page>
    )
}
