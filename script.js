const statsFAQ = [
  {
    pattern: /(mean|average)/i,
    answer:
      "The mean (average) is the sum of all values divided by the number of values. It measures the center of the data."
  },
  {
    pattern: /median/i,
    answer:
      "The median is the middle value when the data are sorted. If there is an even number of values, it is the average of the two middle values."
  },
  {
    pattern: /mode/i,
    answer:
      "The mode is the value that appears most frequently. A dataset can have no mode, one mode, or multiple modes."
  },
  {
    pattern: /(variance|standard deviation|std dev|sd)/i,
    answer:
      "Variance measures how spread out the data are. Standard deviation is the square root of the variance and uses the same units as the data."
  },
  {
    pattern: /(population|sample)\s+mean/i,
    answer:
      "A population mean (μ) includes all members of a population, while the sample mean (x̄) is calculated from a subset of that population."
  },
  {
    pattern: /(population|sample)\s+standard deviation/i,
    answer:
      "Population standard deviation divides by N. Sample standard deviation divides by n − 1 to correct for bias when estimating from a sample."
  },
  {
    pattern: /(null hypothesis|alternative hypothesis|h0|ha)/i,
    answer:
      "The null hypothesis (H₀) states no effect or no difference. The alternative hypothesis (Hₐ) states the effect or difference being tested."
  },
  {
    pattern: /(p[\s-]?value|pvalue|p[-\s]?val)/i,
    answer:
      "The p-value is the probability of observing results as extreme as the sample results if the null hypothesis is true. A small p-value gives evidence against H₀."
  },
  {
    pattern: /(type i error|type 1 error)/i,
    answer:
      "A Type I error occurs when you reject a true null hypothesis. Its probability is α (commonly 0.05)."
  },
  {
    pattern: /(type ii error|type 2 error)/i,
    answer:
      "A Type II error occurs when you fail to reject a false null hypothesis. Its probability is β, and 1 − β is statistical power."
  },
  {
    pattern: /(confidence interval|ci)/i,
    answer:
      "A confidence interval provides a range of plausible values for a population parameter. A 95% CI captures the true parameter in about 95% of repeated samples."
  },
  {
    pattern: /(normal distribution|bell curve|z score|z-score)/i,
    answer:
      "The normal distribution is a symmetric bell-shaped distribution. A z-score indicates how many standard deviations a value is from the mean."
  },
  {
    pattern: /(z[\s-]?test|t[\s-]?test)/i,
    answer:
      "A z-test is used when the population standard deviation is known or the sample size is large. A t-test is used when the population SD is unknown and the sample SD is used instead."
  },
  {
    pattern: /correlation/i,
    answer:
      "Correlation measures the strength and direction of a linear relationship between two quantitative variables. Correlation does not imply causation."
  },
  {
    pattern: /sample size/i,
    answer:
      "Sample size is the number of observations in a sample. Larger samples produce more precise estimates and more powerful tests."
  }
];
