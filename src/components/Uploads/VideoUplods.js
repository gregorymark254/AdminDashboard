import React from 'react'

const VideoUplods = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center py-8">Upload Video</h1>
        <div>
          <form action="">
            <div className="flex">
              <section>
                <div>
                  <h3>1.Movie Details</h3>
                  <div>
                    <label htmlFor="type">Type of movie <br />
                      <input 
                        type="text" 
                        required
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <h3>2.Synopsis</h3>
                  <div>
                    <label htmlFor="type">Type <br />
                      <input 
                        type="text" 
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="type">Director <br />
                      <input 
                        type="text" 
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="type">File <br />
                      <input 
                        type="file" 
                        required
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <h3>3.Terms & Condition</h3>
                  <div>
                    <p>Choose an option:</p>
                    <input type="radio" id="age1" name="age" value="30"/>
                    <label for="age1">20/80</label><br/>
                    <input type="radio" id="age2" name="age" value="60"/>
                    <label for="age2">30/70</label><br/>  
                    <input type="radio" id="age3" name="age" value="100"/>
                    <label for="age3">40/60</label>
                  </div>
                </div>
              </section>
              <section>
                <div className="p-4">
                  <img src="" alt="video profile" />
                </div>
                <div className="p-4">
                  <span>Movie to be reviewed</span>
                  <p>Movie will be reviwed before uploading</p>
                </div>

                <div className="space-y-3 p-4">
                  <span>Upload Date <p>12/01/2024</p></span>
                  <span>Total <p>naira 20</p></span>
                  <span>Status <p className="bg-green-200 text-white">pending</p></span>
                </div>

                <div className="p-4">
                  <button className="bg-blue-600 text-white">Submit</button>
                </div>
              </section>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default VideoUplods
