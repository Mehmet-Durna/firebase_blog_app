

function ProfileCard(props) {

    const {user}=props;



    return (
        <div className="card " >
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <img src={user?.photoURL} alt="Profile Image"
                         className="rounded-circle"  referrerPolicy="no-referrer"/>
                    <div className="mt-3">
                        <h4>{user.displayName}</h4>
                        <p className="text-secondary mb-1">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;