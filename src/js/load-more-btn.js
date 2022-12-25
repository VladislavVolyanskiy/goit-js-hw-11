export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.animation = document.querySelector('.loading');

    return refs;
  }

  // >-- button visible, amimation hidden --<
  enable() {
    // this.refs.button.disabled = false;
    // this.refs.button.textContent = 'Load more';
    this.refs.button.classList.remove('is-hidden');
    this.refs.animation.classList.add('is-hidden');
  }

  // >-- button hidden, amimation visible --<
  disable() {
    // this.refs.button.disabled = true;
    // this.refs.button.textContent = 'Loading...';
    this.refs.button.classList.add('is-hidden');
    this.refs.animation.classList.remove('is-hidden');
  }

  // >-- button visible, amimation hidden --<
  // show() {
  //   this.refs.button.classList.remove('is-hidden');
  //   this.refs.animation.classList.add('is-hidden');
  // }

  // >-- button hidden, amimation hidden --<
  hide() {
    this.refs.button.classList.add('is-hidden');
    this.refs.animation.classList.add('is-hidden');
  }
}
