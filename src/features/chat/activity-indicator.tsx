const ActivityIndicator = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="h-2 w-2 animate-bounce rounded-full bg-slate-500"></div>
      <div className="h-2 w-2 animate-bounce rounded-full bg-slate-500 delay-200"></div>
      <div className="h-2 w-2 animate-bounce rounded-full bg-slate-500 delay-400"></div>
    </div>
  );
};

export default ActivityIndicator;
