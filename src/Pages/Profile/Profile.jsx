import useAuth from "../../Hooks/useAuth";


const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-md mx-auto mt-20 mb-20 bg-base-100 shadow p-6 rounded">
      <div className="text-center">
        <img
          src={user?.photoURL || "/user.png"}
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-xl font-bold mt-3">
          {user?.displayName}
        </h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
