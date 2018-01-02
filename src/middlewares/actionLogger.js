export default function () {
  // next = The next middleware to pass action to if required
  return next => action => {
    console.log(action);
    return next(action)
  }
}
