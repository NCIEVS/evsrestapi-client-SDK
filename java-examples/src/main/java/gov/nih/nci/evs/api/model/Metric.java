
package gov.nih.nci.evs.api.model;

/**
 * Metric.
 */
public class Metric {

  /** The metric id. */
  private Long metricId;

  /** The username. */
  private String username;

  /** The remote ip address. */
  private String remoteIpAddress;

  /** The organization. */
  private String organization;

  /** The application name. */
  private String applicationName;

  /** The end point. */
  private String endPoint;

  /** The class name. */
  private String className;

  /** The method name. */
  private String methodName;

  /** The query params. */
  private String queryParams;

  /** The start time. */
  private String startTime;

  /** The end time. */
  private String endTime;

  /** The duration. */
  private Long duration;

  /**
   * Returns the metric id.
   *
   * @return the metric id
   */
  public Long getMetricId() {
    return metricId;
  }

  /**
   * Sets the metric id.
   *
   * @param metricId the metric id
   */
  public void setMetricId(Long metricId) {
    this.metricId = metricId;
  }

  /**
   * Returns the username.
   *
   * @return the username
   */
  public String getUsername() {
    return username;
  }

  /**
   * Sets the username.
   *
   * @param username the username
   */
  public void setUsername(String username) {
    this.username = username;
  }

  /**
   * Returns the remote ip address.
   *
   * @return the remote ip address
   */
  public String getRemoteIpAddress() {
    return remoteIpAddress;
  }

  /**
   * Sets the remote ip address.
   *
   * @param remoteIpAddress the remote ip address
   */
  public void setRemoteIpAddress(String remoteIpAddress) {
    this.remoteIpAddress = remoteIpAddress;
  }

  /**
   * Returns the organization.
   *
   * @return the organization
   */
  public String getOrganization() {
    return organization;
  }

  /**
   * Sets the organization.
   *
   * @param organization the organization
   */
  public void setOrganization(String organization) {
    this.organization = organization;
  }

  /**
   * Returns the application name.
   *
   * @return the application name
   */
  public String getApplicationName() {
    return applicationName;
  }

  /**
   * Sets the application name.
   *
   * @param applicationName the application name
   */
  public void setApplicationName(String applicationName) {
    this.applicationName = applicationName;
  }

  /**
   * Returns the end point.
   *
   * @return the end point
   */
  public String getEndPoint() {
    return endPoint;
  }

  /**
   * Sets the end point.
   *
   * @param endPoint the end point
   */
  public void setEndPoint(String endPoint) {
    this.endPoint = endPoint;
  }

  /**
   * Returns the class name.
   *
   * @return the class name
   */
  public String getClassName() {
    return className;
  }

  /**
   * Sets the class name.
   *
   * @param className the class name
   */
  public void setClassName(String className) {
    this.className = className;
  }

  /**
   * Returns the method name.
   *
   * @return the method name
   */
  public String getMethodName() {
    return methodName;
  }

  /**
   * Sets the method name.
   *
   * @param methodName the method name
   */
  public void setMethodName(String methodName) {
    this.methodName = methodName;
  }

  /**
   * Returns the query params.
   *
   * @return the query params
   */
  public String getQueryParams() {
    return queryParams;
  }

  /**
   * Sets the query params.
   *
   * @param queryParams the query params
   */
  public void setQueryParams(String queryParams) {
    this.queryParams = queryParams;
  }

  /**
   * Returns the start time.
   *
   * @return the start time
   */
  public String getStartTime() {
    return startTime;
  }

  /**
   * Sets the start time.
   *
   * @param startTime the start time
   */
  public void setStartTime(String startTime) {
    this.startTime = startTime;
  }

  /**
   * Returns the end time.
   *
   * @return the end time
   */
  public String getEndTime() {
    return endTime;
  }

  /**
   * Sets the end time.
   *
   * @param endTime the end time
   */
  public void setEndTime(String endTime) {
    this.endTime = endTime;
  }

  /**
   * Returns the duration.
   *
   * @return the duration
   */
  public Long getDuration() {
    return duration;
  }

  /**
   * Sets the duration.
   *
   * @param duration the duration
   */
  public void setDuration(Long duration) {
    this.duration = duration;
  }

}
