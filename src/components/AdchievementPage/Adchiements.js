import Button from "../ButtonComponent/Button";
import "./Adchiements.css";
const Adchiements = ({ dataAdchievement }) => {
  return (
    <div>
      {dataAdchievement.length > 0 ? (
        dataAdchievement.map((adchiement) => (
          <div key={adchiement.id} className="wrapprer-adchiement">
            <img
              src={adchiement.image[0]}
              alt={adchiement.clinic}
              className="image-adchiement"
            />
            <div>
              <h3 className="title-adchiement">{adchiement.title}</h3>
              <p className="des-adchiement">{adchiement.content}</p>
              <Button booking={true} />
            </div>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center" }}>
          Chưa có thành tựu nào được đăng tải.
        </p>
      )}
    </div>
  );
};

export default Adchiements;
