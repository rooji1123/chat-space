class Api::MessagesController < ApplicationController
  def index
    @messages = Message.where('group_id', params[:group_id]).where('id > ?', params[:message][:id])
    respond_to do |format|
      format.json
    end
  end
end