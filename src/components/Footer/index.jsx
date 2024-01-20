import React from "react";
import s from "./index.module.css";
import Instagram from "./assets/instagram.svg";
import WhatsApp from "./assets/whatsapp.svg";
import Map from "./assets/map.svg";

export default function Footer() {
  return (
    <div>
      <div className={s.contact}>
        <div className={s.contactH1}>
          <h1 className={s.contactH1Text}>Contact</h1>
        </div>

        <div className={s.contactInfo}>
          <div className={s.contactPhone}>
            <p className={s.contactText}>Phone</p>
            <p className={s.contactNumber}>+49 999 999 99 99</p>
          </div>

          <div className={s.contactSocials}>
            <p className={s.socialsText}>Socials</p>
            <div className={s.socialsLogo}>
              <img className={s.socialsLogo1} src={Instagram} alt="Instagram" />
              <img src={WhatsApp} alt="WhatsApp" />
            </div>
          </div>

          <div className={s.contactAddress}>
            <p className={s.addressText}>Address</p>
            <p className={s.addressName}>
              Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
            </p>
          </div>

          <div className={s.contactHours}>
            <p className={s.hoursText}>Working Hours</p>
            <p className={s.hoursName}>24 hours a day</p>
          </div>
        </div>
        <div className={s.map}>
          <div className={s.mapImg}>
            <img src={Map} alt="Map" />
          </div>
        </div>
      </div>
    </div>
  );
}
