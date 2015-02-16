class EventsController < ActionController::Base
  def index
    events = Event.all
    respond_to do |format|
      format.json {render :json => events, :include => :solutions}
      format.html {render :index}
    end
  end

  def create
    
      event = {
      name: params["name"],
      description: params["description"],
      probability: params["probability"],
      impact: params["impact"],
      accept: params["accept"]
    }
    Event.create(event)
     respond_to do |format|
      format.json {render :json => event}
      format.html{render '/events'}
    end
  end


  def show
      event = Event.find(params[:id])
      respond_to do |format|
      format.json {render :json => event}
      format.html{render '/events'}
    end

  end

end

