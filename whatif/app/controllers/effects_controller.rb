class EffectsController < ActionController::Base

   def create
    
      effect = {
      effects: params["effect"],
      event_id: params["event_id"],
      emotion: params["emotion"]
    }

    Effect.create(effect)
     respond_to do |format|
      format.json {render :json => effect}
      format.html{render '/events'}
    end
  end
  
 def index
  effects = Effect.where(event_id: params["id"])
  respond_to do |format|
      format.json {render :json => effects}
      format.html {render '/events'}
    end
 end
end
