import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";

class BurgerPage extends Component {
  state = {
    confirmOrder: false,
    lastCustomerName: "N/A",
    loading: false,
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  continueOrder = () => {
    const params = [];

    for (let orts in this.props.burgeriinOrts) {
      params.push(orts + "=" + this.props.burgeriinOrts[orts]);
    }

    params.push("dun=" + this.props.niitUne);

    const query = params.join("&");
    this.props.history.push("/ship");
    this.closeConfirmModal();
  };

  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
            ></OrderSummary>
          )}
        </Modal>

        {this.state.loading && <Spinner />}

        <p>Сүүлчийн захиалагч: {this.state.lastCustomerName}</p>
        <Burger />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ortsNemeh={this.props.burgertOrtsNem}
          ortsHasah={this.props.burgereesOrtsHas}
        ></BuildControls>
      </div>
    );
  }
}

export default BurgerPage;
