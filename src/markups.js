export const langBtnMarkup = `
    <button id="rus" class="lang-btn">
        RU
    </button>
    <button id="en" class="lang-btn active">
        EN
    </button>
    <button id="be" class="lang-btn">
        BE
    </button>
`;
export const tempBtnMarkup = `  
    <span class="control-block__temp-menu">
        <button id="cel" class="degree-btn active">C°</button>
        <button id="fahr" class="degree-btn">°F</button>
    </span>
`;
export const bgBtnMarkup = `     
    <button id="bg-change">
    <span class="control-block__background-btn">
        <i class="material-icons autorenew-btn">
        autorenew
        </i>
    </span>
    </button>
`;
export const searchBlockMarkup = `   
    <div
    class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-trailing-icon"
    >
    <a href="" class="speech-icon-link">
        <i class="material-icons mdc-text-field__icon">keyboard_voice</i>
    </a>

    <input class="mdc-text-field__input" id="text-field-hero-input" />
    <div class="mdc-notched-outline">
        <div class="mdc-notched-outline__leading"></div>
        <div class="mdc-notched-outline__notch">
        <label for="text-field-hero-input" class="mdc-floating-label"
            >Location</label
        >
        </div>
        <div class="mdc-notched-outline__trailing"></div>
    </div>
    </div>
    <div class="button-container">
    <button class="mdc-fab mdc-fab--extended">
    <div class="mdc-fab__ripple"></div>
    <span class="mdc-fab__label">Search</span>
    </button>
    </div>
`;
export const currentLocationBlockMarkup = `   
    <div class="current-location-block__title"></div>
    <div class="current-location-block__date-container">
    <div class="current-location-block__date-container--date"></div>
    <div class="current-location-block__date-container--time"></div>
    </div>
    <div class="current-location-block__info-wrapper">
    <div class="current-location-block__info-wrapper--temp"></div>
    <div class="text-icon__container">
        <canvas id="icon1" width="100" height="100"></canvas>
        <div class="current-location-block__info-wrapper--text">
        <ul class="menu">
            <li class="menu-item summary"></li>
            <li class="menu-item">
            <span class="feelsLikeTitle">Feels like</span>:
            <span class="feels-like"></span>
            </li>
            <li class="menu-item">
            <span class="windTitle"> Wind </span>:
            <span class="wind"></span>
            </li>
            <li class="menu-item">
            <span class="humidityTitle">
                Humidity
            </span>
            :
            <span class="humidity"></span>
            </li>
        </ul>
        </div>
    </div>
    </div>
`;
export const geolocationBlockMarkup = `     
    <div class="geolocation-block__map" id="map"></div>
    <div class="geolocation-block__info">
    <div class="geolocation-block__info--latitude">
        <span class="latitudeTitle">Latitude:</span>
        <span class="latitude"></span>
    </div>
    <div class="geolocation-block__info--longitude ">
        <span class="longitudeTitle">Longitude:</span>
        <span class="longitude"></span>
    </div>
    </div>
`;
export const threeDaysBlockMarkup = `     
    <div class="three-days-block__container1 col-sm-2">
      <div class="three-days-block__title day1"></div>
        <div class="wrapper__temp">
        <div class="three-days-block__temp day1-temp"></div>
        <canvas id="icon2" width="25" height="25"></canvas>
     </div>
    </div>
    <div class="three-days-block__container2 col-sm-2">
      <div class="three-days-block__title day2"></div>
        <div class="wrapper__temp">
        <div class="three-days-block__temp day2-temp"></div>
        <canvas id="icon3" width="25" height="25"></canvas>
      </div>
    </div>
    <div class="three-days-block__container3 col-sm-2">
      <div class="three-days-block__title day3"></div>
        <div class="wrapper__temp">
        <div class="three-days-block__temp day3-temp"></div>
        <canvas id="icon4" width="25" height="25"></canvas>
      </div>
    </div>
`;
