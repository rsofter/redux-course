import configureStore from './store/configureStore';
import { loadBugs, removeBug } from './store/bugs'

const store = configureStore();

store.dispatch(loadBugs());
setTimeout(() => store.dispatch(removeBug(1)), 2000);