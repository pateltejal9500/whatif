class SolutionsController < ActionController::Base
  def create
    
      solution = {
      
      description: params["description"],
      probability: params["probability"],
      event_id: params["event_id"]
    }
    
    Solution.create(solution)
     respond_to do |format|
      format.json {render :json => solution}
      format.html{render '/events'}
    end
  end
 

end
