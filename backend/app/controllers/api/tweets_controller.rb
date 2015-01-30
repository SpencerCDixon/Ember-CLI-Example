module API
  class TweetsController < BaseController
    def index
      @tweets = Tweet.all
      render json: @tweets
    end

    def create
      @tweet = Tweet.new(tweet_params)

      if @tweet.save
        render json: @tweet
      else
        render json: { errors: @tweet.errors }
      end
    end

    protected

    def tweet_params
      params.require(:tweet).permit(:description)
    end
  end
end
