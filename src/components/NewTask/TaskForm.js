import { useState } from 'react';

import './TaskForm.css';

const TaskForm = (props) => {
  const [text, setText] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    if (text.trim().length > 0) {
      props.onEnterTask(text);
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
