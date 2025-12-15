import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router";
import axios from "axios";


const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let photoURL = user.photoURL;

    // upload new image if selected
    if (data.photo?.length > 0) {
      const formData = new FormData();
      formData.append("image", data.photo[0]);

      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`,
        formData
      );

      photoURL = imgRes.data.data.url;
    }


    await updateUserProfile({
      displayName: data.name,
      photoURL: photoURL,
    });

   

    navigate("/profile");
  };

  return (
    <div className="max-w-md mx-auto mt-10 mb-10 bg-base-100 shadow p-6 rounded">
      <h2 className="text-xl font-bold mb-4">Update Profile</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          defaultValue={user?.displayName}
          {...register("name")}
          className="input input-bordered w-full"
          placeholder="Full Name"
        />

        <input
          type="file"
          {...register("photo")}
          className="file-input file-input-bordered w-full"
        />

        <button className="btn btn-secondary w-full">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
