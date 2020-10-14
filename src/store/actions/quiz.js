import axios from '../../axios/axios-quiz'

export function fetchQuizes() {
  return async (dispatch) => {
    dispatch(fetchQuizesStart())
    try {
      const response = await axios.get('/quiz.json')

      const quizes = []

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `TEST №${index + 1}`,
        })
      })
      dispatch(fetchQuizesSuccess(quizes))
    } catch (e) {
      dispatch(fetchQuizesError(e))
    }
  }
}

export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_START,
  }
}

export function fetchQuizesSuccess(quizes) {
  return {
    type: FETCH_QUIZES_SUCCESS,
    quizes,
  }
}

export function fetchQuizesError(e) {
  return {
    type: FETCH_QUIZES_ERROR,
    error: e,
  }
}
