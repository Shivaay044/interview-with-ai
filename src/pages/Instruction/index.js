import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import StartInstruction from './StartInstruction';
import SystemPermission from './SystemPermission';
import AudioTest from './AudioTest';
import CameraTest from './CameraTest';









const StepBuilder = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [audio,setAudio] = useState(true);
  const [video,setVideo] = useState(true);

  const steps = [
    {
      title: 'Interview Instruction',
      content: <StartInstruction/>,
    },
    {
      title: 'System Permissions',
      content: <SystemPermission/>,
    },
    {
      title: 'Audio Test',
      content: <AudioTest setAudio={setAudio}/>,
    },
    {
      title: 'Camera Test',
      content: <CameraTest setVideo={setVideo}/>,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    // color: token.colorTextTertiary,
    // backgroundColor: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    // marginTop: 50,
  };

  return (
    <div style={{margin:"50px"}}>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button disabled={current==2&&audio} type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button disabled={video&&current==3} type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};
export default StepBuilder;