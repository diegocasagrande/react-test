/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { connect } from 'react-redux';

import * as CoursesActions from '../../store/actions/courses';

const Sidebar = ({ modules, dispatch }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => dispatch(CoursesActions.toogleLesson(module, lesson))}>Selecionar</button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

export default connect(state => ({ modules: state.courses.modules }))(Sidebar);
