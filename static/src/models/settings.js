import { ipcRenderer, remote } from 'electron'

const { dialog } = remote

export default {

    namespace: 'settings',
  
    state: {
        androidHome: '',
        directoryValid: false,
        aaptPath: '',
        aapt2Path: '',
        apkSingerPath: ''
    },
  
    effects: {
      *fetch(_, { put }) {  // eslint-disable-line
        let androidHome = ipcRenderer.sendSync("get-android-home")
        yield put({ type: 'show', androidHome });
      },

      *save (_, { put, select }) {
        const { androidHome } = yield select(state => state.settings)

        let result = dialog.showOpenDialogSync(
          { title: "ANDROID_HOME", defaultPath: androidHome, properties: ["openDirectory"] }
        )

        //TODO list buildtools, list platforms

        if (!result) return
        yield put({ type: 'show', androidHome: result[0] })
      }
    },
  
    reducers: {
      show (state, action) {
        return { ...state, androidHome: action.androidHome };
      },
    },
  
  };
  