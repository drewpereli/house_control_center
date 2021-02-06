import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task } from 'ember-concurrency-decorators';
import { inject as service } from '@ember/service';

export default class EditableApplianceComponent extends Component {
  @service store;

  typeOptions = ['lamp'];

  @tracked isEditing = false;

  get isEditingOrNew() {
    return this.isEditing || this.args.appliance.isNew;
  }

  get boards() {
    return this.store.peekAll('board');
  }

  get unclaimedBoards() {
    return this.boards.filter((board) => !board.appliance);
  }

  get boardOptions() {
    let boardOptions = this.unclaimedBoards.map((board) => ({
      board,
      label: `Board ${board.id}`,
    }));

    if (this.args.appliance.board) {
      boardOptions = [
        { board: null, label: 'Disconnect' },
        {
          board: this.args.appliance.board,
          label: `Board ${this.args.appliance.board.id}`,
        },
        ...boardOptions,
      ];
    }

    return boardOptions;
  }

  get selectedBoardOption() {
    return this.boardOptions.findBy('board.id', this.args.appliance?.board?.id);
  }

  @task
  *saveAppliance() {
    try {
      yield this.args.appliance.save();
      this.isEditing = false;
    } catch (error) {
      console.log(error);
    }
  }

  @task
  *destroyAppliance() {
    try {
      yield this.args.appliance.destroyRecord();
      this.isEditing = false;
    } catch (error) {
      console.log(error);
    }
  }

  @action
  selectBoardOption(option) {
    this.args.appliance.board = option.board;
  }

  @action
  cancelEdits() {
    this.args.appliance.rollbackAttributes();
    this.isEditing = false;
  }
}
