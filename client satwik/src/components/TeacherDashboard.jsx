const TeacherDashboard = () => {
  
    const teachers = [
      {
        id: 1,
        name: "Teacher",
        schoolName: "Governemnt School"
      }
    ];

    //const teaches = [1, 2]


    return (
      <section id="teachers">
      <div className="bg-gray-600 shadow-lg py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center">Teams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div key={index} className="bg-gray-400 rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center flex-wrap justify-around mb-4">
                    <p>10</p>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
      </section>
    );
  };
  
  export default TeamCardsSection;