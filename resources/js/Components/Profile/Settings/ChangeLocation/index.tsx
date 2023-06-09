import InputText from '@/Components/InputText'
import { ChangeEventHandler } from "react"
import MapIcon from "/public/assets/images/icon/map-2.svg"
interface ChangeLocationProps {
  data: {
    location: string;
  };
  errors?: Record<string, string | undefined>;
  onChangeLocation: ChangeEventHandler<HTMLInputElement>;
}
const ChangeLocation: React.FC<ChangeLocationProps> = ({ data, errors, onChangeLocation }) => {
  return (
    <div className="change-area">
      <div className="row">
        <div className="col-lg-12">
          <div className="info-title">
            <h6>Change Location</h6>
            <div className="dash"></div>
          </div>
        </div>
        <div className="col-md-12">
          <InputText
            errors={errors}
            value={data.location}
            onChange={onChangeLocation}
            name="location"
            title='Get Location*'
            placeholder='Mirpur-12, Block-C, Road-3/20, Dhaka'
            srcIcon={MapIcon}
          />
        </div>
        <div className="col-md-12">
          <div className="location-map mb-35">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116795.52186985579!2d90.31523677800563!3d23.82357482672597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1673956671914!5m2!1sen!2sbd"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangeLocation