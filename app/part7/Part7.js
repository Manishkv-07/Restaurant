export default function Part7(){
    return(
          <div className="w-full py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              <div className="max-w-6xl mx-auto px-4">
                  <div className="text-center mb-6">
                      <h2 className="text-sm text-yellow-400">MASTER CHEFS</h2>
                      <h1 className="text-3xl md:text-5xl font-bold">Meet Our Special Chiefs</h1>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-10 items-center justify-center py-6">
                      <div className="relative flex flex-col items-center">
                          <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                               <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden">
                                   <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" />
                               </div>
                          </div>
                          <div className="absolute -bottom-8 w-56 p-4 bg-white dark:bg-gray-800 shadow-xl text-center rounded-xl">
                              <h3 className="text-lg md:text-xl font-bold">Gordon Ramsey</h3>
                              <p className="text-sm text-yellow-400">Head Chef</p>
                          </div>
                      </div>

                      <div className="relative flex flex-col items-center">
                          <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                               <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden">
                                   <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" />
                               </div>
                          </div>
                          <div className="absolute -bottom-8 w-56 p-4 bg-white dark:bg-gray-800 shadow-xl text-center rounded-xl">
                              <h3 className="text-lg md:text-xl font-bold">Massimo Bottura</h3>
                              <p className="text-sm text-yellow-400">Sous Chef</p>
                          </div>
                      </div>

                      <div className="relative flex flex-col items-center">
                          <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                               <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden">
                                   <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" />
                               </div>
                          </div>
                          <div className="absolute -bottom-8 w-56 p-4 bg-white dark:bg-gray-800 shadow-xl text-center rounded-xl">
                              <h3 className="text-lg md:text-xl font-bold">Hélène Darroze</h3>
                              <p className="text-sm text-yellow-400">Pastry Chef</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
}
