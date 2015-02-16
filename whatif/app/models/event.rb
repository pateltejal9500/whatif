class Event < ActiveRecord::Base
   has_many :solutions
   has_many :effects
end