class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update]
  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.create(group_params)
    if @group.save
      flash[:notice] = "グループを作成しました"
      redirect_to root_path
    else
      render :new
    end
  end

  def update
    if @group.update(group_params)
      redirect_to root_path, notice: 'グループを編集しました'
    else
      render :edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:title, { user_ids: []})
  end

  def set_group
    @group = Group.find(params[:id])
  end
end
