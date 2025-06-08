<template>
  <div>
    <v-tabs class="reports-table-tab" v-model="active" slider-color="primary">
      <v-tab
        class="text-capitalize"
        v-for="(tab, index) in tabs"
        :key="index"
        ripple
        :value="index"
      >
        {{ $t('message' + '.' + tab.title) }}
      </v-tab>
    </v-tabs>
    <v-tabs-window v-model="active">
      <v-tabs-window-item :value="0">
        <v-card flat>
          <div class="table-responsive">
            <app-section-loader :status="loader"></app-section-loader>
            <v-data-table
              :headers="headersForTransactionList"
              :items="tabsAndTableDetails.transactionListDetails"
              hide-default-footer
            >
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.transid }}</td>
                  <td class="text-nowrap">
                    {{ item.date }}
                  </td>
                  <td class="text-nowrap">{{ item.account }}</td>
                  <td>
                    <v-badge :class="item.typeColor">{{ item.type }}</v-badge>
                  </td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.debit }}</td>
                  <td>{{ item.credit }}</td>
                  <td>{{ item.balance }}</td>
                </tr>
              </template>
            </v-data-table>
          </div>
        </v-card>
      </v-tabs-window-item>
      <v-tabs-window-item :value="1">
        <v-card flat>
          <div class="table-responsive">
            <app-section-loader :status="loader"></app-section-loader>
            <v-data-table
              :headers="headersForTransferReport"
              :items="tabsAndTableDetails.transferReport"
              hide-default-footer
            >
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.transid }}</td>
                  <td class="text-nowrap">
                    {{ item.date }}
                  </td>
                  <td class="text-nowrap">{{ item.account }}</td>
                  <td>
                    <v-badge :class="item.typeColor">{{ item.type }}</v-badge>
                  </td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.balance }}</td>
                  <td>
                    <v-badge :class="item.statusColor">{{ item.status }}</v-badge>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </div>
        </v-card>
      </v-tabs-window-item>
      <v-tabs-window-item :value="2">
        <v-card flat>
          <div class="table-responsive">
            <app-section-loader :status="loader"></app-section-loader>
            <v-data-table
              :headers="headersForExpenseCategory"
              :items="tabsAndTableDetails.expenseCategoryDetails"
              hide-default-footer
            >
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.itmNo }}</td>
                  <td class="text-nowrap">
                    {{ item.date }}
                  </td>
                  <td>
                    <v-badge :class="item.typeColor">{{ item.type }}</v-badge>
                  </td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.amount }}</td>
                  <td>
                    <v-badge :class="item.statusColor">{{ item.status }}</v-badge>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </div>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script>
import { tabsAndTableDetails } from '@/views/crm/data.js'

export default {
  data() {
    return {
      loader: false,
      invoice: [],
      headersForTransactionList: [
        {
          text: 'Transaction Id',
          sortable: false,
          value: 'transaction Id',
        },
        {
          text: 'Date',
          sortable: false,
          value: 'date',
        },
        {
          text: 'Account',
          sortable: false,
          value: 'account',
        },
        {
          text: 'Type',
          sortable: false,
          value: 'type',
        },
        {
          text: 'Amount',
          sortable: false,
          value: 'amount',
        },
        {
          text: 'Debit',
          sortable: false,
          value: 'debit',
        },
        {
          text: 'Credit',
          sortable: false,
          value: 'credit',
        },
        {
          text: 'Balance',
          sortable: false,
          value: 'balance',
        },
      ],

      headersForTransferReport: [
        {
          text: 'Transfer Id',
          sortable: false,
          value: 'transfer Id',
        },
        {
          text: 'Date',
          sortable: false,
          value: 'date',
        },
        {
          text: 'Account',
          sortable: false,
          value: 'account',
        },
        {
          text: 'Type',
          sortable: false,
          value: 'type',
        },
        {
          text: 'Amount',
          sortable: false,
          value: 'amount',
        },
        {
          text: 'Balance',
          sortable: false,
          value: 'balance',
        },
        {
          text: 'Status',
          sortable: false,
          value: 'status',
        },
      ],

      headersForExpenseCategory: [
        {
          text: 'Item No',
          sortable: false,
          value: 'item No',
        },
        {
          text: 'Date',
          sortable: false,
          value: 'date',
        },
        {
          text: 'Type',
          sortable: false,
          value: 'type',
        },
        {
          text: 'Description',
          sortable: false,
          value: 'description',
        },
        {
          text: 'Amount',
          sortable: false,
          value: 'Amount',
        },
        {
          text: 'Status',
          sortable: false,
          value: 'info',
        },
      ],
      tabsAndTableDetails,
      tabs: [
        {
          title: 'transactionList',
        },
        {
          title: 'transferReport',
        },
        {
          title: 'expenseCategory',
        },
      ],
    }
  },
  mounted() {},
  methods: {
    next() {},
  },
}
</script>

<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>
