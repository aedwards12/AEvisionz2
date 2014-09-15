require 'dragonfly'

# Configure
Dragonfly.app.configure do
  plugin :imagemagick

  secret "72170a77f307e18287e2ed728e17ae9ea5b50558970d3d2a16baff91f948f37a"
  url_host 'http://d3qsxujqwcvsf0.cloudfront.net'
  # url_format "/media/:job/:sha/:name/"
  url_format "/:uid/:name/"

  def url_for(job, opts={})
  	p "running"
      opts = opts.dup
      host = opts.delete(:host) || url_host
      path_prefix = opts.delete(:path_prefix) || url_path_prefix
      params = job.url_attributes.extract(url_mapper.params_in_url)
      params.merge!(stringify_keys(opts))
      params['job'] = job.serialize
      params['sha'] = job.sha if verify_urls
      url = url_mapper.url_for(params)
      "#{host}#{path_prefix}#{url}"
    end

  define_url do |app, job, opts| 
  p "+" * 100 
  p app   
  p job
  p opts
  p "+" * 100 
   # allows overriding urls - defaults to
    if job.step_types == [:fetch]    
    p "rubnby"       # app.server.url_for(job, opts)
     p app.datastore.url_for(job.uid)
    else

    	
       app.server.url_for(job, opts)

    end
  end

	if Rails.env.test?
	  datastore :file,
	    root_path: Rails.root.join('public/system/dragonfly', Rails.env),
	    server_root: Rails.root.join('public')
	else
		datastore :s3,
			bucket_name: "aevisionzbucket",
			# access_key_id: Rails.application.secrets.S3_KEY,
			# secret_access_key: Rails.application.secrets.S3_SECRET,
			access_key_id: "AKIAJHRHR5TRCFNBUC4Q",
			secret_access_key: "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",
			url_scheme: 'https'    
	end
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
