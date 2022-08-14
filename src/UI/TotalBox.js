const TotalCountBox = ({ title, count, ml, color }) => {
  return (
    <div className={`w-full bg-full-layer rounded-lg ${ml ? "ml-4" : ""}`}>
      <div className="flex justify-center items-center">
        <div className="w-1.5/5 bg-second-box-color p-7 rounded-l-lg shadow-lg">
          <p className={`text-3xl ${
              color === "green"
                ? "text-green-600"
                : color === "red"
                ? "text-red-600"
                : "text-blue-600"
            } font-semibold`}
>$</p>
        </div>
        <div className="w-4/5 bg-full-layer p-4 rounded-lg text-white shadow-lg">
          <span className="text-sm">{title}</span>
          <h3 className="text-3xl font-semibold">${count}</h3>
        </div>
      </div>
    </div>
  );
};

export default TotalCountBox;
