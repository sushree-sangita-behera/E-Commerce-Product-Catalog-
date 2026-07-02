function Loading() {
  return (
    <div className="flex justify-center items-center h-96">

      <div className="text-center">

        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <p className="mt-5 text-xl font-semibold text-gray-600">
          Loading Products...
        </p>

      </div>

    </div>
  );
}

export default Loading;