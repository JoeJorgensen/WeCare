class Api::BraintreeController < ApplicationController
  def token
    render json: ENV['BRAINTREE_DROPIN_TOKEN']
  end

  # => amount, nonce...
  # => transaction id if it is successful.
  def payment
    result = Braintree::Transaction.sale(
      :amount => params[:amount],
      :payment_method_nonce => params[:nonce],
      :options => {
        # charge the card right now
        :submit_for_settlement => true
      }
    )

    if result.success?
      render json: result.transaction.id
      # Something is wrong with the card 
    elsif result.transaction
      text = "text: #{result.transaction.processor_response_text}"
      code = "code: #{result.transaction.processor_response_code}"
      render json: { errors: { text: text, code: code } }
      #Something went wrong not on braintrees end (me problem. maybe syntax error)
    else
      render json: { errors: result.errors }
    end
  end
end