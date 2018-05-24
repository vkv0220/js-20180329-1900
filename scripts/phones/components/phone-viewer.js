'use strict';

import Component from '../../component.js';

export default class PhoneViewer extends Component {
  constructor({ element }) {
    super({ element });

    this._render();

    this._element.addEventListener('click', this._onBackButtonClick.bind(this));
  }



  _onBackButtonClick() {
    let backButton = event.target.closest('[data-element="back-button"]');

    if (!backButton) {
      return;
    }

    this._trigger('back');
  }

  _render() {
    this._element.innerHTML = `
      <h2>Phone details</h2>

      <div>
        <img class="phone" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">

        <button data-element="back-button">Back to list</button>
        <button>Add to basket</button>
    
        <h1>Motorola XOOM™ with Wi-Fi</h1>
    
        <p>Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’ll enjoy HD video in a thin, light, powerful and upgradeable tablet.</p>
    
        <ul class="phone-thumbs">
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
          </li>
        </ul>
      </div>
    `;
  }
}