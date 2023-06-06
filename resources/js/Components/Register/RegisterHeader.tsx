import { Link } from "@inertiajs/react";
import React, {memo} from "react";

import {RegistrationTypes} from "@/Enums/RegistrationTypeEnum"

const RegisterHeader: React.FC<{ type: RegistrationTypes }> = memo(({ type }) =>  {
  return (
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <Link
          href={route('register')}
          className={type == RegistrationTypes.Person ? 'nav-link active' : 'nav-link'}
        >
          Candidate
        </Link>
        <Link
          href={route('register.company')}
          className={type == RegistrationTypes.Company ? 'nav-link active' : 'nav-link'}
        >
          Company
        </Link>
      </div>
    </nav>
  );
});

export default RegisterHeader