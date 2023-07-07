import "../css/all.css";
import "../css/app.css"
import "../css/animate.css"
import "../css/bootstrap.min.css"
import './bootstrap';

import "../css/summernote.min.css"
import "../css/boxicons.min.css"
import "../css/bootstrap-icons.css"
import "../css/jquery-ui.css"
import "../css/swiper-bundle.css"
import "../css/slick-theme.css"
import "../css/slick.css";
import "../css/nice-select.css"
import "../css/select2.min.css"
import "../css/jquery.fancybox.min.css"
import "../css/datepicker.min.css"
import "../css/jquery-ui.css";
import "../css/uiicss.css"
import "../css/style.css";
import "../css/custom.css";

//PrimeReact styles
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from "react"
import Layout from "@/Components/Layout";
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,

  resolve: name => {
    const page = resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob('./Pages/**/*.tsx')
    );
    page.then((module: any) => {
      if ([
        'Auth/Login',
        'Auth/RegisterUser',
        'Auth/RegisterCompany',
      ].indexOf(name) === -1) {
        module.default.layout = module.default.layout || (module => <Layout>{module}</Layout>);
      }
    });
    return page
  },

  // resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <React.StrictMode>
        <App {...props} />
      </React.StrictMode>);
  },
  progress: {
    color: '#4B5563',
  },
});
