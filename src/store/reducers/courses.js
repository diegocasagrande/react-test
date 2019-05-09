const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: 'titulo 1',
      lessons: [{ id: 1, title: 'lesson 1' }, { id: 2, title: 'lesson 2' }],
    },
    {
      id: 2,
      title: 'titulo 2',
      lessons: [{ id: 3, title: 'lesson 3' }, { id: 3, title: 'lesson 2' }],
    },
  ],
};

export default function courses(state = INITIAL_STATE, action) {
  if (action.type === 'TOOGLE_LESSON') {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }

  return state;
}
