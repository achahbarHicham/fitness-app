return (
  <div className='find-exercise'>
      <div className="container">
          <h2 className='title-up'>Find Exersice</h2>

      {
        err && <div className={`message ${!allExercisesData.length ? 'danger':'success'}`}>{message}</div>
      }

      <form className='find-exersice--form form' onSubmit={findExersices}>
      <h1>{exercise}</h1>
          <div className="form-group">
            
              <input
              type="text" 
              className="form-group--input-text"
              id='input-text'
              placeholder='Search For Exercise'
              // onChange={(e) => setInputText(e.target.value)}
              onChange={debouncedChangeHandler}
              ref={inputRef}
              // value={inputText}
               />
               <Button type="submit" text='Search' className='btn btn-search' />
          </div>

      </form>
      {
        allExercisesData.length ? <div className="resutl">Result : <strong>{allExercisesData.length}</strong> Exercises</div> : null
      }
        <div className="find-exercies-container"> 

        {allExercisesData.length ? <AllExersices data={allExercisesData} /> : 'No Result'}    
        </div>
      </div>
  </div>
)