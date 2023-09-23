import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div className="flex flex-row justify-center items-center bg-slate-800 min-h-screen">
      <p className="font-semibold text-2xl text-white">{username}</p>
    </div>
  );
};

export default ProfilePage;
