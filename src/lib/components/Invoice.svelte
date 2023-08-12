<script lang='ts'>
    //@ts-nocheck
    import Card, { Content } from '@smui/card';
    export let invoice;
    let gst = 0.18;
    const totalPrice = (invoice.amount * (1 + gst)).toFixed(2);
  </script>
  
  <style>
    .invoice {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
    }
  
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
  
    .logo {
      width: 100px;
    }
  
    .plan-info,
    .customer-info,
    .price-info,
    .company-info {
      margin-bottom: 20px;
    }
  
    dt {
      font-weight: bold;
    }
  
    dd {
      margin-bottom: 10px;
    }
  </style>
  <section>
    <Card>
        <Content>
            <div class="invoice">
                <div class="header">
                  <img class="logo" src={'/favicon.png'} alt="Mathril.com" />
                  <h1 class='mdc-typography--headline5'>Invoice</h1>
                </div>
              
                <dl class="company-info">
                  <dt>Company Name:</dt>
                  <dd>Mathril</dd>
                  <dt>Website:</dt>
                  <dd>https://aiguru.dev</dd>
                  <dt>GST Number:</dt>
                  <dd>03EYJPK3861C1ZM (eSpace)</dd>
                </dl>
              
                <dl class="plan-info">
                  <dt>Subscription:</dt>
                  <dd>{invoice.type}</dd>
                </dl>
              
                <dl class="customer-info">
                  <dt>Customer:</dt>
                  <dd>{invoice.name} (ID: {invoice.publicID})</dd>
                </dl>
              
                <dl class="price-info">
                  <dt>Price:</dt>
                  <dd>Rs {invoice.amount}</dd>
                  <dt>GST:</dt>
                  <dd>{0.18 * 100}%</dd>
                  <dt>Total Price:</dt>
                  <dd>Rs {totalPrice}</dd>
                </dl>
              
                <div>
                  <strong>Invoice ID:</strong> {invoice.payment_id}<br />
                  <strong>Date:</strong> {new Date(invoice.creationTimestamp).toLocaleDateString()}
                </div>
              </div>
        </Content>
    </Card>
  </section>
  
  