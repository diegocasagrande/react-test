/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CoursesActions from '../../store/actions/courses';

const Sidebar = ({ modules, toogleLesson }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => toogleLesson(module, lesson)}>Selecionar</button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = state => ({
  modules: state.courses.modules,
});

const mapDispatchToProps = dispatch => bindActionCreators(CoursesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
