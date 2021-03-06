import React from 'react';
import Header from 'client/core/header';

import * as bs from 'react-bootstrap';

const CourseSelect = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
    }}
  >
    <Header
      user={window.django2react.username}
      firstname={window.django2react.firstname}
      lastname={window.django2react.lastname}
    />

    {window.django2react.doesNotExist &&
      <bs.Panel className={'message-panel'}>
        <p style={{ marginBottom: '15px' }}>No such course exists</p>
      </bs.Panel>}
    {window.django2react.justLoggedIn &&
      <bs.Panel className={'message-panel'}>
        <p style={{ marginBottom: '15px' }}>
          Welcome to Interlecture, {window.django2react.username}
        </p>
      </bs.Panel>}
    <bs.Panel>
      <bs.Form action="/courses/" method="post">
        <bs.FormGroup>
          <bs.FormControl
            type="text"
            name="name"
            defaultValue={window.django2react.courseName}
            placeholder="Course code"
          />
        </bs.FormGroup>
        <bs.FormGroup>
          <bs.Button className={'single'} bsStyle="primary" type="submit" block>
            Go to course
          </bs.Button>
        </bs.FormGroup>
        <input type="hidden" name="csrfmiddlewaretoken" value={window.django2react.csrfToken} />
      </bs.Form>
    </bs.Panel>
  </div>
);
export default CourseSelect;
