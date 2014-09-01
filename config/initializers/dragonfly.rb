require 'dragonfly'
# require 'dragonfly/s3_data_store'

# Configure
Dragonfly.app.configure do
  plugin :imagemagick

  secret "92d09f556efb5cb559acac29368410bac380b516c35281bc5f136d3996922c75"

  url_format "/media/:job/:name"

  # if Rails.env.development? || Rails.env.test?
  datastore :file,
            root_path: Rails.root.join('public/system/dragonfly', Rails.env),
            server_root: Rails.root.join('public')
  # end

end

# Logger
Dragonfly.logger = Rails.logger

# Mount as middleware
Rails.application.middleware.use Dragonfly::Middleware

# Add model functionality
if defined?(ActiveRecord::Base)
  ActiveRecord::Base.extend Dragonfly::Model
  ActiveRecord::Base.extend Dragonfly::Model::Validations
end
