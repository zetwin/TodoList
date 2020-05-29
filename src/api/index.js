import firebase from 'firebase/app';

export default {
  // auth
  currentUser() {
    const user = firebase.auth().currentUser;
    return user || null;
  },
  async registration({ name, email, password }) {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.database().ref(`/users/${result.user.uid}/info`).set({ name });
  },
  async login({ email, password }) {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  },
  async logout() {
    await firebase.auth().signOut();
  },
  // info
  async getUserInfo() {
    const { uid, email } = this.currentUser();
    const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val();
    info.email = email;
    return info;
  },
  // tasks
  async getTasks() {
    const { uid } = this.currentUser();
    const tasks = (await firebase.database().ref(`/users/${uid}/tasks`).once('value')).val() || {};
    return Object.keys(tasks).map((key) => ({ ...tasks[key], id: key }));
  },
  async taskUpdate(id, newData) {
    const { uid } = this.currentUser();
    await firebase.database().ref(`/users/${uid}/tasks`).child(id).update(newData);
  },
  async addTask(data) {
    const { uid } = this.currentUser();
    const result = await firebase.database().ref(`/users/${uid}/tasks`).push(data);
    return result;
  },
  async removeTask(id) {
    const { uid } = this.currentUser();
    await firebase.database().ref(`/users/${uid}/tasks`).child(id).remove();
  },
};
