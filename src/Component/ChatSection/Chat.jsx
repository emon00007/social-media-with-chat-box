

const chats = [
  {
    name: "Rejuwanul Islam Ratul",
    message: "আমার একজন প্রোফেশনাল...",
    time: "33m",
    profile: "https://via.placeholder.com/50",
  },
  {
    name: "Shamim Parvej",
    message: "You sent an attachment.",
    time: "35m",
    profile: "https://via.placeholder.com/50",
  },
  {
    name: "ছোট ভাই 💚",
    message: "ছোট ভাই 💚 sent an attachment.",
    time: "1h",
    profile: "https://via.placeholder.com/50",
  },
  {
    name: "Farzana Tasnim",
    message: "😒",
    time: "9h",
    profile: "https://via.placeholder.com/50",
  },
  {
    name: "Bestfriend",
    message: "You: https://www.facebook.com/sh...",
    time: "9h",
    profile: "https://via.placeholder.com/50",
  },
  {
    name: "Md Roman Sarder",
    message: "You: Sobai k ready thakte bolse...",
    time: "11h",
    profile: "https://via.placeholder.com/50",
  },
  {
    name: "Sala Babu 🥰",
    message: "Sala Babu 🥰 sent an attachment.",
    time: "11h",
    profile: "https://via.placeholder.com/50",
  },
];

const Chat = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold">Chats</h2>
      <input
        type="text"
        placeholder="Search Messenger"
        className="w-full p-2 border rounded-md mt-2"
      />

      {/* Tabs */}
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 font-semibold bg-gray-200 rounded-lg">
          Inbox
        </button>
        <button className="px-4 py-2 font-semibold">Communities</button>
      </div>

      {/* Chat List */}
      <div className="mt-4">
        {chats.map((chat, index) => (
          <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
            <img src={chat.profile} alt="Profile" className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <h3 className="font-semibold">{chat.name}</h3>
              <p className="text-gray-500 text-sm">{chat.message}</p>
            </div>
            <span className="text-gray-400 text-xs">{chat.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
