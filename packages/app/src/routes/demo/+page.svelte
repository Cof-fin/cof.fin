<script lang="ts">
  import VerticalStack from "../../components/Stack/VerticalStack.svelte";
  import Tab from "../../components/Tab/Tab.svelte";
  import { activeTab, signature, typedSignature } from "../../stores";
  import USDCETHIcon from "../../public/images/ethusdc.png";
  import GHOETHIcon from "../../public/images/ethgho.png";
  import USDCIcon from "../../public/images/usdc24.png";
  import ETHIcon from "../../public/images/eth24.png";
  import LineChart from "../../components/Chart/LineChart.svelte";
  import InputBoxWithBalance from "../../components/Input/InputBoxWithBalance.svelte";
  import Slider from "../../components/Input/Slider.svelte";
  import RangeInput from "../../components/Input/RangeInput.svelte";
  import OptimalRangeInfo from "../../components/Display/OptimalRangeInfo.svelte";
  import DepositButton from "../../components/Button/DepositButton.svelte";
  import WithdrawInfo from "../../components/Display/WithdrawInfo.svelte";
  import WithdrawButton from "../../components/Button/WithdrawButton.svelte";
  import ManagePositionInfo from "../../components/Display/ManagePositionInfo.svelte";
  import RebalanceButton from "../../components/Button/RebalanceButton.svelte";

  import { readGho, readUsdc } from "../../generated";
  import { onMount } from "svelte";
  import { fetchBalance, getAccount } from "@wagmi/core";
  import { ghoBalance, usdcBalance, ethBalance, ethData } from "../../stores";
  import { client } from "../../components/GraphQL/Client";
  import { gql } from "@apollo/client";
  import CreateVaultButton from "../../components/Button/CreateVaultButton.svelte";

  const query = `
  query {
    token(id: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2") {
      tokenDayData(where: { date_gt: 1681433322 }) {
        priceUSD
        open
        volumeUSD
        volume
        untrackedVolumeUSD
        totalValueLockedUSD
        totalValueLocked
        feesUSD
        date
      }
    }
  }
`;

  onMount(async () => {
    let { address } = await getAccount();

    if (address) {
      ghoBalance.set(await readGho({ functionName: "balanceOf", args: [address] }));
      console.log($ghoBalance);
      usdcBalance.set(await readUsdc({ functionName: "balanceOf", args: [address] }));
      console.log($usdcBalance);
      ethBalance.set((await fetchBalance({ address: address })).value);
      console.log($ethBalance);
    }

    if (client) {
      client
        .query({
          query: gql(query),
        })
        .then((data) => {
          console.log("Data: ", data);
          let formattedData = data.data.token.tokenDayData.map((item: any) => {
            return {
              date: item.date,
              value: item.priceUSD,
            };
          });
          console.log("🚀 | formattedData | formattedData:", formattedData);
          ethData.set(formattedData);
        })
        .catch((err) => {
          console.log("Error fetching data: ", err);
        });
    }
  });
</script>

<VerticalStack>
  <title><img src={GHOETHIcon} alt={GHOETHIcon} /> ETH/GHO POOL OPTIMIZER</title>
  <Tab />

  <container>
    {#if $activeTab === "Deposit"}
      {#if $ethData}
        <div><LineChart data={$ethData} /></div>
      {/if}
      <div class="deposit-form">
        <InputBoxWithBalance icon={USDCIcon} name={"USDC"} balance={$usdcBalance} />
        <InputBoxWithBalance icon={ETHIcon} name={"ETH"} balance={$ethBalance} />
        <Slider />
        <RangeInput />
        <OptimalRangeInfo />
        <CreateVaultButton />
        <DepositButton />
      </div>
    {:else if $activeTab === "Withdraw"}
      {#if $ethData}
        <div><LineChart data={$ethData} /></div>
      {/if}
      <div class="deposit-form">
        <InputBoxWithBalance icon={""} name={"cf-USDC/ETH"} balance={1000} />
        <WithdrawInfo />
        <WithdrawButton />
      </div>
    {:else if $activeTab === "Manage"}
      {#if $ethData}
        <div><LineChart data={$ethData} /></div>
      {/if}
      <div class="deposit-form">
        <ManagePositionInfo />
        <RangeInput />
        <OptimalRangeInfo />
        <RebalanceButton />
      </div>
    {/if}
  </container>
</VerticalStack>

<style>
  title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    padding-top: 0px;
    padding-bottom: 20px;
    /* identical to box height, or 120% */

    display: flex;
    align-items: center;

    gap: 8px;

    color: #f5f5f5;
  }

  container {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }

  .deposit-form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
</style>
